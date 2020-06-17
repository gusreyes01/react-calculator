/*** 
 * 
 * operations/index.js
 * We'll use this component to encapsulate all the calculator operations. 
 * It will receive an object with the following attributes:
 * 
 * userTotal    - this is the current total value (displayed)
 * calcVal      - internal value we're running (before it's displayed)
 * operand      - operand expecting to be executed
 * curVal       - current value that we'll calculate against the total
 * 
***/

const Operation = (obj) => {

    const _roundNumber = (val) => {
        return Math.round(val * 1000000) / 1000000;
    }

    const _division = (obj) => {
        if(obj.curVal === "0"){
            alert("Cannot divide by 0")
        }

        let total = parseFloat(obj.userTotal) / parseFloat(obj.calcVal);
        total = _roundNumber(total);
        return {
            userTotal: total,
            calcVal: null,
            curVal: null,
            operand: null,
        }
    }

    const _muliplication = (obj) => {
        let total = parseFloat(obj.userTotal) * parseFloat(obj.calcVal);
        total =_roundNumber(total);
        return {
            userTotal: total,
            calcVal: null,
            curVal: null,
            operand: null,
        }
    }

    const _addition = (obj) => {
        let total = parseFloat(obj.userTotal) + parseFloat(obj.calcVal);
        total = _roundNumber(total);
        return {
            userTotal: total,
            calcVal: null,
            curVal: null,
            operand: null,
        }
    }

    const _substract = (obj) => {
        let total = parseFloat(obj.userTotal) - parseFloat(obj.calcVal);
        total = _roundNumber(total);
        return {
            userTotal: total,
            calcVal: null,
            curVal: null,
            operand: null,
        }
    }

    const _decimal = (obj) => {
        let calcVal = obj.calcVal;
  
        if(calcVal && calcVal.indexOf(".") === -1){
            calcVal = calcVal + '.';
        }
        
        return {
            userTotal: obj.userTotal,
            calcVal: calcVal,
            curVal: null,
            operand: obj.operand,
        }
    }

    const _percent = (obj) => {
        let total = obj.userTotal / 100;
        if(obj.calcVal){
            total = obj.calcVal  / 100;
       }
        return {
            userTotal: total,
            calcVal: null,
            curVal: null,
            operand: obj.operand,
        }
    }
    
    const _clear = () => {
        let total = 0;
        return {
            userTotal: total,
            calcVal: null,
            curVal: null,
            operand: null,
        }
    }

    const _eval = (obj) => {  
        let total = obj.userTotal;
        if(obj.calcVal){
            total = obj.calcVal;
        }

        // If there's an operation pending, execute it
        if(obj.operand){
            return operandSwitch(obj, obj.operand);
        }

        return {
            userTotal: total,
            calcVal: null,
            curVal: null,
            operand: null,
        }
    }

    const _isOperand = (val) => {
        // Operands need an extra digit to be executed against
        const operands = ['×','−','+','÷'];
        const isOperand = operands.includes(val);
        return isOperand
    }

    const operandSwitch = (obj, symbol) => {
        switch(symbol){
            case '=':
                return _eval(obj);
            case '.':
                return _decimal(obj);
            case '%':
                return _percent(obj);
            case '÷':
                return _division(obj);
            case '×':
                return _muliplication(obj);
            case '−':
                return _substract(obj);
            case '+':
                return _addition(obj);
            default:
                return _clear(obj);
        }
    }

    const _calculate = (obj) => {
        let total, operand, calcVal;
        // Validate if pressed key is a symbol or number
        if (isNaN(obj.curVal)) {
            // Validate if pressed symbol is an operand
            if(_isOperand(obj.curVal)){
                // Set operand as active
                if(obj.operand){
                    if (obj.userTotal && obj.calcVal){
                        let res = operandSwitch(obj, obj.operand);
                        res.operand = obj.curVal;
                        return res;
                    }else{
                        obj.operand = obj.curVal;
                        return obj;
                    }
                }else{
                    // Set operand as active
                    operand = obj.curVal
                    if(obj.userTotal){
                        return {
                            userTotal: obj.userTotal, 
                            calcVal: null,
                            curVal: null,
                            operand: operand
                        }
                    }
                }
                // If a calculation is ongoing, display it 
                return {
                    userTotal: obj.calcVal, 
                    calcVal: null,
                    curVal: null,
                    operand: operand
                }
            }else{   
                return operandSwitch(obj, obj.curVal);             
            }
        }else{
            // Validate if we should ignore 
            if(obj.userTotal === 0){
                total = obj.curVal;
                return { calcVal: total }
            } else if(obj.operand){
                    if (obj.calcVal) {
                        calcVal =  obj.calcVal + obj.curVal;
                    }else {
                        calcVal = obj.curVal;
                    }
                    return { calcVal, userTotal: obj.userTotal, operand: obj.operand }
            }else{
                if (obj.calcVal) {
                    calcVal = obj.calcVal + obj.curVal;
                }else { 
                    calcVal = obj.curVal;
                }

                return { calcVal: calcVal, userTotal: obj.userTotal, operand: obj.operand }
                    
                }
            }
        }
    
    return { calculate: _calculate(obj) }
 
}

export default Operation;
