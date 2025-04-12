import { User, UserStore } from "../models/user";

const store = new UserStore();

describe('User model tests suite', ()=>{


    it('Expect a create method',async()=>{

        expect(store.create).toBeDefined();
    })

    it('Expect an authenticate method',async()=>{

        expect(store.authenticate).toBeDefined();
    })

   
})