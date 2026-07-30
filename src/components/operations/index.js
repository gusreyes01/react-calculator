/*** 
 * 
 * operations/index.js
 * 
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

    const _result = (userTotal) => ({
        userTotal,
        calcVal: null,
        curVal: null,
        operand: null,
    });

    const _applyArithmetic = (state, symbol) => {
        const left = parseFloat(state.userTotal);
        const right = parseFloat(state.calcVal);

        if (!Number.isFinite(left) || !Number.isFinite(right)) {
            return _result("Error");
        }

        if (symbol === '÷' && right === 0) {
            return _result("Error");
        }

        const operations = {
            '+': (a, b) => a + b,
            '−': (a, b) => a - b,
            '×': (a, b) => a * b,
            '÷': (a, b) => a / b,
        };

        return _result(_roundNumber(operations[symbol](left, right)));
    }

    const _decimal = (obj) => {
        let calcVal = obj.calcVal;
        
        if((calcVal === 0 || !(calcVal))){
            calcVal = "0."
        }

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
        let total = parseFloat(obj.userTotal) / 100;
        if(obj.calcVal){
            total = parseFloat(obj.calcVal) / 100;
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
            case '×':
            case '−':
            case '+':
                return _applyArithmetic(obj, symbol);
            default:
                return _clear(obj);
        }
    }

    const _calculate = (obj) => {
        let operand, calcVal;
        // Validate if pressed key is a symbol or number
        if (isNaN(obj.curVal)) {
            // Validate if pressed symbol is an operand
            if(_isOperand(obj.curVal)){
                // Set operand as active
                if(obj.operand){
                    if (obj.userTotal && obj.calcVal){
                        const res = operandSwitch(obj, obj.operand);
                        return { ...res, operand: obj.curVal };
                    }else{
                        return { ...obj, curVal: null, operand: obj.curVal };
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
            // Validate if we should ignore zero
            if( (!(obj.calcVal) || obj.calcVal === 0) && obj.curVal === "0" ){
                return { ...obj, calcVal: 0, curVal: null }
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
