/*** 
 * 
 * operations/index.js
 * We'll use this component to encapsulate all the calculator operations. 
 * It will receive an object with the following attributes:
 * 
 * operand - type of operation we'll execute
 * newVal  - new value that we'll calculate against the total
 * total   - this is the current total value
 * 
***/

const Operation = (obj) => {

    let _division = (obj) => {
        let total = obj.total / obj.newVal
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }

    let _muliplication = (obj) => {
        let total = obj.total * obj.newVal
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }

    let _addition = (obj) => {
        let total = obj.total + obj.newVal
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }

    let _substract = (ob) => {
        let total = obj.total - obj.newVal
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }

    let _decimal = (obj) => {
        let total = obj.total + '.' 
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }

    let _percent = (obj) => {
        let total = obj.total / 100
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }

    let _equal = (obj) => {
        let total = obj.total = obj.newVal
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }
    
    let _clear = (obj) => {
        let total = obj.total + '.' 
        return {
            total: total,
            operand: null,
            newVal: null,
        }
    }

    let calculate = (obj) => {

        if (isNaN(obj.newVal)) {
            switch(obj.newVal){
                case 'AC':
                    return _clear(obj)
                case '.':
                    return _decimal(obj)
                case '%':
                    return _percent(obj)
                case '÷':
                    return _division(obj)
                case '×':
                    return _muliplication(obj)
                case '−':
                    return _substract(obj)
                case '+':
                    return _addition(obj)
                case '=':
                    return _equal(obj)
                default:
                    return _clear(obj)
            }
             

        }else{
            return {total: obj.total + obj.newVal, 
                    operand: obj.operand,
                    newVal: null
                }
        }
    }

    return calculate(obj)
 
}

export default Operation;
