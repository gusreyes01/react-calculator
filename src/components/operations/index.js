/*** 
 * 
 * operations/index.js
 * We'll use this component to encapsulate all the calculator operations. 
 * It will receive an object with the following attributes:
 * 
 * userTotal   - this is the current total value (displayed)
 * calcTotal   - internal operation we're running (before it's displayed)
 * operand     - operand expecting to be executed
 * newVal      - new value that we'll calculate against the total
 *
 * 
***/

const Operation = (obj) => {

    const _division = (obj) => {
        let total = obj.userTotal / obj.newVal
        return {
            userTotal: total,
            calcTotal: null,
            newVal: null,
        }
    }

    const _muliplication = (obj) => {
        let total = obj.userTotal * obj.newVal
        return {
            userTotal: total,
            calcTotal: null,
            newVal: null,
        }
    }

    const _addition = (obj) => {
        let operand =  obj.newVal
        let total = obj.userTotal
        return {
            userTotal: total,
            calcTotal: operand,
            newVal: null,
        }
    }

    const _substract = (ob) => {
        let total = obj.userTotal - obj.newVal
        return {
            userTotal: total,
            calcTotal: null,
            newVal: null,
        }
    }

    const _decimal = (obj) => {
        let total = obj.userTotal + '.' 
        return {
            userTotal: total,
            calcTotal: null,
            newVal: null,
        }
    }

    const _percent = (obj) => {
        let total = obj.userTotal / 100
        return {
            userTotal: total,
            calcTotal: null,
            newVal: null,
        }
    }
    
    const _clear = (obj) => {
        let total = 0 
        return {
            userTotal: total,
            calcTotal: null,
            newVal: null,
        }
    }

    const _eval = (obj) => {
        let total = obj.calcTotal;
        return {
            userTotal: total,
            calcTotal: obj.calcTotal,
            newVal: null,
        }
    }

    const _isOperand = (val) => {
        const operands = ['×','−','']
        const isOperand = operands.includes(val);
        return isOperand
    }

    const operandSwitch = (obj, symbol) => {
        switch(symbol){
            case '=':
                return _eval(obj)
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
            default:
                return _clear(obj)
        }
    }

    const calculate = (obj) => {
        let total;

        // Validate if pressed key is a symbol or number
        if (isNaN(obj.newVal)) {
            // Validate if pressed symbol is an operand
            if(_isOperand(obj.newVal)){
                // Set operand as active
                obj.operand = obj.newVal
                alert(JSON.stringify(obj))
                return obj
            }else{
                return operandSwitch(obj, obj.newVal)
            }
            
        }else{
            // Validate if ignore
            if(obj.userTotal == "0"){
                total = obj.newVal
            // Execute operand
            } else if(obj.operand){
                return operandSwitch(obj, obj.operand)
            }
            // Append number
            else {
                total = obj.userTotal + obj.newVal
            }
            return {userTotal: total, 
                    calcTotal: total,
                    newVal: null,
                    operand: obj.operand
                    }
        }
    }

    return calculate(obj)
 
}

export default Operation;
