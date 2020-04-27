const { isArray, isNum } = require("../utils/type");

class Sequence extends Array {
    constructor() {
        super();
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                {
                    if (isArray(arguments[0])) {
                        for (let i = 0; i < arguments[0].length; i++) {
                            this[this.length] = arguments[0][i];
                        }
                    } else {
                        for (let i = 0; i < arguments[0]; i++) {
                            this[this.length] = 0;
                        }
                    }
                }
                break;
            case 2:
                {
                    for (let i = 0; i < arguments[0]; i++) {
                        this[this.length] = arguments[1];
                    }
                }
                break;
            default: {
                throw new Error("the number of parameters is not right.");
            }
        }
    }

    static isSequence(seq) {
        return seq.constructor == Sequence;
    }

    static plus(lhs, rhs, offset = 0) {
        if (!Sequence.isSequence(lhs) || !Sequence.isSequence(rhs))
            throw new Error("operand must be an object of Sequence.");
        if (!isNum(offset)) throw new Error("offset must be a number.");
        rhs = new Sequence(offset, 0).concat(rhs);
        let res = new Sequence(),
            longer = null,
            shorter = null;
        if (lhs.length > rhs.length) {
            longer = lhs;
            shorter = rhs;
        } else {
            longer = rhs;
            shorter = lhs;
        }
        for (let i = 0; i < shorter.length; i++) {
            res[res.length] = shorter[i] + longer[i];
        }
        for (let i = shorter.length; i < longer.length; i++) {
            res[res.length] = longer[i];
        }
        return res;
    }

    static scalarMul(seq, k) {
        let res = [];
        for (let i = 0; i < seq.length; i++) {
            res[res.length] = seq[i] * k;
        }
        return res;
    }

    add(rhs, offset = 0) {
        if (!Sequence.isSequence(rhs)) throw new Error("operand must be an object of Sequence.");
        if (!isNum(offset)) throw new Error("offset must be a number.");
        rhs = new Sequence(offset, 0).concat(rhs);
        if (this.length > rhs.length) {
            for (let i = 0; i < rhs.length; i++) {
                this[i] += rhs[i];
            }
        } else {
            for (let i = 0; i < this.length; i++) {
                this[i] += rhs[i];
            }
            for (let i = this.length; i < rhs.length; i++) {
                this[i] = rhs[i];
            }
        }
    }

    sum() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    }
}

module.exports = Sequence;
