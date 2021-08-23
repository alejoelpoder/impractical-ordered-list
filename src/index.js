'use strict';

function ordenar_array(list) {
    var orden = [];
    var _orden = [];
    function OrderLoop(oi, oj) {
        for (let i = 0; i < oi.length; i++) {
            if (i == 0) {
                oj.push(oi[i]);
            } else {
                if (oi[i] > oi[i - 1]) {
                    oj.push(oi[i]);
                } else if (oi[i] < oi[i - 1]) {
                    oj.unshift(oi[i]);
                }
            }
        }
    }
    let k = 1;
    while (k != 0) {
            if (!orden.length) {
                OrderLoop(list, orden);
                k = orden.length - 1;
                var m = k - 1;
            } else {
                if (orden[k]<orden[m]) {
                    OrderLoop(orden, _orden);
                    orden = _orden;
                    _orden = [];
                    m = k - 1;
                } else {
                    if (m == 0) {
                        k--;
                    if (k != 0) {
                        m = k - 1;
                    }     
                } else {
                    m--;
                }
            }
        }
    } 
    return orden;
}

module.exports = {
    ordenar_array
}