var priorityQueue = (function () {
    function PriorityQueue(data, compare) {
        this.data = data || [];
        this.length = this.data.length;
        this.compare = compare || defaultCompare;
        if (this.length > 0){
            for(var i=(this.length >> 1)-1; i>=0; i--) {
                this._down(i);
            }
        }
    }

    function defaultCompare(a,b) {
        return a-b;
    }

    PriorityQueue.prototype = {
        push : function(item) {
            this.data.push(item);
            this.length++;
            this._up(this.length-1);
        },
        pop : function() {
            if(this.length === 0) return undefined;
            var top = this.data[0];
            this.length--;
            if(this.length > 0) {
                this.data[0] = this.data[this.length];
                this._down(0);
            }
            this.data.pop();
            return top;
        },
        peek : function() {
            return this.data[0];
        },
        _up : function(pos) {
            var data = this.data;
            var compare = this.compare;
            var item = data[pos];

            while(pos>0) {
                var parent = (pos-1) >> 1;
                var current = data[parent];
                if(compare(item, current) >= 0) break;
                data[pos] = current;
                pos = parent;
            }
            data[pos] = item;
        },
        _down : function(pos) {
            var data = this.data;
            var compare = this.compare;
            var halfLength = this.length >> 1;
            var item = data[pos];

            while(pos < halfLength) {
                var left = (pos << 1) +1;
                var right = left +1;
                var best = data[left];

                if(right < this.length && compare(data[right], best) <0){
                    left = right;
                    best = [right];
                }
                if(compare(best, item) >= 0) break;
                data[pos] = best;
                pos = left;
            }
            data[pos] = item;
        }
    };

    return PriorityQueue;
})();

function solution(ops){
    var answer = [];
    const hight = new priorityQueue(null, (a,b)=>b[0]-a[0]);
    const low = new priorityQueue(null, (a,b)=>a[0]-b[0]);
    let idx=0;
    let visited = [];

    ops.map(v=>{
        debugger;
        if(v[0] === 'I') {
            hight.push([v.substr(1), idx]);
            low.push([v.substr(1), idx++]);
        } else {
            let removed;
            if(v.substr(2) === -1) {
                while(removed = low.pop()){
                    if(visited[removed[0]] === undefined){
                        visited[removed[0]] = 1;
                        break;
                    }
                }
            } else {
                while(removed = hight.pop()) {
                    if(visited[removed[0]] === undefined) {
                        visited[removed[0]] = 1;
                        break;
                    }
                }
            }
        }
    })

    let h=0;
    let l=0;

    while(removed=hight.pop()) {
        if(visited[removed[0]] === undefined) {
            h=removed[0];
            break;
        }
    }

    while(removed=low.pop()) {
        if(visited[removed[0]] === undefined) {
            l = removed[0];
            break;
        }
    }

    return [h?parseInt(h) : 0, 1?parseInt(l):0];
}