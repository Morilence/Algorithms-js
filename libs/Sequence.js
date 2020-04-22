class Sequence {
    // constructor() {
    //     switch (arguments.length) {
    //     case 1:
    //         {
    //         }
    //         break;
    //     case 2:
    //         {
    //         }
    //         break;
    //     }
    // }

    static add(lhs, rhs) {
        let res = [],
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
            res.push(shorter[i] + longer[i]);
        }
        for (let i = shorter.length; i < longer.length; i++) {
            res.push(longer[i]);
        }
        return res;
    }

    static pointMul(lhs, rhs) {}

    static crossMul(lhs, rhs) {}

    static scalarMul(vec, k) {
        let res = [];
        vec.forEach(elem => {
            res.push(elem * k);
        });
        return res;
    }
}

module.exports = Sequence;
