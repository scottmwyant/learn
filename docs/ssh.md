
# Secure Shell (SSH)

Like so many developer tools, SSH comes from the Linux world, so the sample code shown below is intended to run in a Linux environment.

## Official resources

There are two popular implementations.  OpenSSH is little more "official" feeling because that's the one that ships with GitForWindows and even Windows itself, as well as many *nix systems.

- [OpenSSH](https://www.openssh.com/)
- [DropbearSSH](https://matt.ucc.asn.au/dropbear/dropbear.html)

## On Windows

In many cases the easiest way to use SSH on Windows is to not use Windows, but WSL2.  If you truly need to work with SSH on Windows, there are a few quirks.  Make sure it's available on your system by running `where ssh` in CommandPrompt.  The default installation is in *C:\Windows\System32\OpenSSH* (see below).

```
C:\>where ssh
C:\Windows\System32\OpenSSH\ssh.exe

C:\>dir /b Windows\System32\OpenSSH
scp.exe
sftp.exe
ssh-add.exe
ssh-agent.exe
ssh-keygen.exe
ssh-keyscan.exe
ssh.exe
```

## Generating keys

Before you can do anything else, you need to generate a pair of keys.  This page will not go into the technical details of asymetric encryption, but we'll provide a very high level explaination for people who are not familiar with the concept.  If you were to use a single key to "lock" (encrypt) and "unlock" (decrypt) a message (like a password) you have the problem of getting the key to the other trusted party in a secure manner.  This single-key approach is "symetric encryption".  This conundrum is solved by "asymetric encryption" which is where you use one key, the "public key" to encrypt and a different key, the "private key" to decrypt.  Using this method, you can freely distribute the public key as long as the private key is safeguarded.

Use `ssh-keygen` to generate a pair of keys.  The name of the private key file is *filename* and and the public key file is *filename.pub*. The default algorithm is *rsa*, resulting in a default private key file *~/.ssh/id_rsa* and the public key file *~/.ssh/id_rsa.pub*.  When the key is generated, the private key is hashed (to a "fingerprint"), which is shown in the terminal.  There is also an "ascii art" generated that gives a graphical representation of the fingerprint.  The fingerprint can be retrieved at any point in the future with `ssh-keygen -lvf <path/to/private/key/file>`.

### On Windows

There is an unfortunate quirk with `ssh-keygen` on Windows.  Trivial once it's understood, it was a significant barrier for me when first attempting to use SSH and one of the reasons I would suggest using WSL2.  The snippet below shows the beginning of the process.  The 3rd line is the kicker, the wording used makes it clear that it's asking for a file but to a Windows user it might look like it's asking for a folder because there is no file extension.  It is indeed asking for the name of a file, the private key file is extension-less.  This input is optional, if you don't specify a directory, the key pair is `C:\Users\me\.ssh\id_rsa` and `C:\Users\me\.ssh\id_rsa.pub`.  The actual behavior conflicts with the last part of the prompt (C:\Users\me/.ssh/id_rsa), which sets the expectation that you need to specify the path to a *file*, which is indeed the case on Linux.  

The seperators used in the prompt are also decidedly sloppy.  You have to recognize that the default private key file in Linux is `~/.ssh/id_rsa` and that the Windows equivalent to the Linux homepath, `~`, is `%USERPROFILE%`.  Considering this OS translation you can see that the default file path shown in the prompt is supposed to be `{whatever the OS considers HOME}/.ssh/id_rsa` but the path seperators used in the prompt must be hard-coded, as they do not change with the environment.

```
C:\>ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\me/.ssh/id_rsa): C:\users\me\Desktop
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in C:\users\me\Desktop.
Your public key has been saved in C:\users\me\Desktop.pub.
The key fingerprint is:
SHA256:Bvq9rlfR9YThq0cB2C5uJonqc9KO1PqQpAlhzAeFvok domain\me@COMPUTERNAME
The key's randomart image is:
+---[RSA 3072]----+
| .o.       o. .o |
|o..       . .oo .|
|o+ .  .    o .oo |
|.o.  . .  o o  o.|
|o o o  .So o  o  |
|E+ + +.oo =  o   |
|  o +oo .=  . .  |
|   .++o ..   .   |
|   .+*++o        |
+----[SHA256]-----+
```

Now that we have a shiny new pair of keys, what's next?

## Remote login

One of the most common use cases for SSH is to login to a remote device.  If it's not clear already, the local device you're working on is the SSH client and the remote device is the SSH server.  The first time we log into a device it's best practice to do so with the "remote" device in your posession, possibly even directly patched to the ethernet port on your laptop.  We're going to read the public key from the device and store it in a local "known_hosts" file.  Then, when we login to this device in the future, the SSH protocol will compare the public key on the remote against the value in the local known_hosts file as a security measure to make sure you are logging into the system you think you are.

The second step is to copy your public key to the remote host.  Then the SSH protocol can be used to login to the remote device without the user supplying a password.

### Reading the public key from the remote 

We're going to use `ssh-keyscan` here.  The simplest form of the command is `ssh-keyscan <ip>`, which will read public keys from the remote device, and pipe those results to the console.  There are often multiple public keys on the device, these are host keys that identify the server.  The server will typically accomodate different hashing algorithms, each having it's own key. Run `ls -l /etc/ssh/ssh_host*_key.pub` and you'll usually see keys that support *ecdsa*, *ed25519*, and *rsa*.  In practice, it's reasonable to use `ssh-keyscan -t ecdsa <ip>` form since the *ecdsa* algorithm is what the (OpenSSH?) client will use by default.  It's also recommended we use the `-H` option to hash the hostname as well.  This provides an extra layer of security; should your local private key become comprimised, the adversary will not be able to also see a list (in the known_hosts file) of places to use the key.

The form of the command I use is `ssh-keyscan -H -t ecdsa <ip>`.  This will read the private key, hash it and show the result in the console.  We just need to pipe the result to the knnown_hosts file:

```bash
ssh-keyscan -H -t ecdsa <ip> >> ~/.ssh/knwon_hosts
```

### Copy your private key to the remote

We use `ssh-copy-id` for this step.  The simple form is usually enough here, it assumes the location of your local private key and therefore the location of the public key that should be sitting right next to it.

```bash
ssh-copy-id <user@ip>
```

Alternatively, you can specify the key that is copied to the remote with the `-i` option.  I think the value supplied needs to be the path to the private key, though it's certainly possible that either form of the key could be valid input.  Regardless of the detail on how the input works the public key (with *.pub* extension) is what's copied to the remote.    

```bash
ssh-copy-id -i ~/.ssh/mykey user@host
```

## Logging In

Now we should be able to login with a simple `ssh user@host`.
