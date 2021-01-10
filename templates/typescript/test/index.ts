import { assert } from "chai"
import * as src from '../src/index'

describe("My module", function(){
    
    it("defines the constant \'pi\'", function(){
        assert.isNumber(src.pi)
    });

});