import cartReducer from './reducer'
import expect from 'expect'

describe('cart Reducer',()=>{
    it('should return the initial state', ()=>{
        expect(cartReducer(undefined,{})).toEqual([
        ])

    })
    it('should handle ADDED',()=>{
        expect(
            cartReducer([],{
                type: 'ADDED',
                payload: {id:"1", quantity:3}
            })
        ).toEqual([{
            id:"1", quantity:3
        }])

    })
    it('should handle SETTED',()=>{
        expect(
            cartReducer([],{
                type: 'SETTED',
                payload: {id:"1", quantity:5}
            })
        ).toEqual([{
            id:"1", quantity:5
        }])

    })
    it('should handle ADDED again',()=>{
        expect(
            cartReducer([{id:"1", quantity:5}],{
                type: 'ADDED',
                payload: {id:"2", quantity:4}
            })
        ).toEqual([{
            id:"1", quantity:5},
            {id:"2", quantity:4}
            ])
    })
    it('should handle REMOVED',()=>{
        expect(
            cartReducer([{
                id:"1", quantity:5},
                {id:"2", quantity:4}],{
                type: 'REMOVED',
                payload: {id:"1"}
            })
        ).toEqual([
            {id:"2", quantity:4}
        ])
    })
    it('should handle REMOVEALL',()=>{
        expect(
            cartReducer([],{
                type: 'REMOVEALL'
            })
        ).toEqual([
        ])
    })
})
