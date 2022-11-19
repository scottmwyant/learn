
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

The following convention is used; the name of the private key file is `{name}` and and the public key file is `{name}.pub`.

Use `ssh-keygen` to generate a pair of keys.  The default private key is *~/.ssh/id_rsa* and the default public key is *~/.ssh/id_rsa.pub*.  When the key is generated, the private key is hashed to a fingerprint, which is shwon in the terminal.  There is also an "ascii art" generated that gives a graphical representation of the fingerprint.  The fingerprint can be retrieved at any point in the future with `ssh-keygen -lvf <path/to/private/key/file>`.

### On Windows

There is an unfortunate quirk with `ssh-keygen` on Windows.  Trivial once it's understood, it was a significant barrier for me when first attempting to use SSH and one of the reasons I would suggest using WSL2.  The snippet below shows the beginning of the process.  The 3rd line is the kicker, the wording used makes it clear that it's asking for a file but the input needs to be an (existing) folder, not a file.  This input is optional, if you don't specify a directory, the key pair is C:\Users\me\.ssh\id_rsa and C:\Users\me\.ssh\id_rsa.pub.  The combination of the actual default behavior conflicts with the last part of the prompt (C:\Users\me/.ssh/id_rsa), which sets the expectation that you need to specify the path to a *file*, which is indeed the case on Linux.  

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
