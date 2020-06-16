/*** 
 * 
 * operations/index.js
 * We'll use this component to encapsulate all the calculator operations. 
 * It will receive an object with the following attributes:
 * 
 * userTotal    - this is the current total value (displayed)
 * calcTotal    - internal operation we're running (before it's displayed)
 * operand      - operand expecting to be executed
 * curVal       - current value that we'll calculate against the total
 * 
***/

const Operation = (obj) => {

    const _division = (obj) => {
        if(obj.curVal === "0"){
            alert("Cannot divide by 0")
        }
        let total = parseFloat(obj.userTotal) / parseFloat(obj.calcTotal)
        total = Math.round(total * 10000) / 10000
        return {
            userTotal: total,
            calcTotal: null,
            curVal: null,
            operand: obj.operand,
        }
    }

    const _muliplication = (obj) => {
        let total = parseFloat(obj.userTotal) * parseFloat(obj.calcTotal)
        console.log(obj)
        return {
            userTotal: total,
            calcTotal: null,
            curVal: null,
            operand: obj.operand,
        }
    }

    const _addition = (obj) => {
        let total = parseFloat(obj.userTotal) + parseFloat(obj.calcTotal)
        return {
            userTotal: total,
            calcTotal: null,
            curVal: null,
            operand: obj.operand,
        }
    }

    const _substract = (ob) => {
        let total = parseFloat(obj.userTotal) - parseFloat(obj.calcTotal)
        return {
            userTotal: total,
            calcTotal: null,
            curVal: null,
            operand: obj.operand,
        }
    }

    const _decimal = (obj) => {
        let total = obj.userTotal + '.' 
        return {
            userTotal: total,
            calcTotal: null,
            curVal: null,
            operand: null,
        }
    }

    const _percent = (obj) => {
        let total = obj.userTotal / 100
        return {
            userTotal: total,
            calcTotal: null,
            curVal: null,
            operand: null,
        }
    }
    
    const _clear = (obj) => {
        let total = 0 
        return {
            userTotal: total,
            calcTotal: null,
            curVal: null,
            operand: null,
        }
    }

    const _eval = (obj) => {
        // let total = obj.userTotal
        // if(obj.calcTotal){
        //      total = obj.calcTotal;
        // }
        // return {
        //     userTotal: total,
        //     calcTotal: null,
        //     curVal: null,
        //     operand: null,
        // }
        return operandSwitch(obj, obj.operand)
    }

    const _isOperand = (val) => {
        // Operands need an extra digit to be executed against
        const operands = ['×','−','+','÷']
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

    const _calculate = (obj) => {
        let total, operand, calcTotal;
        // Validate if pressed key is a symbol or number
        if (isNaN(obj.curVal)) {
            // Validate if pressed symbol is an operand
            if(_isOperand(obj.curVal)){
                // Set operand as active
                if(obj.operand){
                    return operandSwitch(obj, obj.curVal)
                }else{
                    // Set operand as active
                    operand = obj.curVal
                }

                // If a calculation is ongoing, display it 
                return {
                    userTotal: obj.calcTotal, 
                    calcTotal: null,
                    curVal: null,
                    operand: operand
                }
            }else{
                return operandSwitch(obj, obj.curVal)
            }
        }else{

            // Validate if we should ignore 
            if(obj.userTotal === 0){
                total = obj.curVal
                return { calcTotal: total }
            } else if(obj.operand){
                    if (obj.calcTotal) {
                        calcTotal =  obj.calcTotal + obj.curVal
                        return { calcTotal, userTotal: obj.userTotal, operand: obj.operand}
                    }else {
                        calcTotal = obj.curVal
                        return { calcTotal, userTotal: obj.userTotal,  operand: obj.operand}
                    }
                
            }else{
               
                if (obj.calcTotal) {
                    calcTotal = obj.calcTotal + obj.curVal
                }else {
                    calcTotal =  obj.curVal}
                return {calcTotal: calcTotal}
                    
                }
            }
        }
    

    return {calculate: _calculate(obj)}
 
}

export default Operation;
