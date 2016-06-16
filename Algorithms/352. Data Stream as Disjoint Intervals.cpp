/**
 * Definition for an interval.
 * struct Interval {
 *     int start;
 *     int end;
 *     Interval() : start(0), end(0) {}
 *     Interval(int s, int e) : start(s), end(e) {}
 * };
 */
class SummaryRanges {
public:
    /** Initialize your data structure here. */
    SummaryRanges() {
        
    }
    
    void addNum(int val) {
        Interval cur(val, val);
        vector<Interval> res;
        int pos = 0;
        for (auto i : v) {
            if (cur.end + 1 < i.start) {
                res.push_back(i);
            } else if (cur.start > i.end + 1) {
                res.push_back(i);
                pos++;
            } else if (cur.end + 1 == i.start) {
                cur.end = i.end;
            } else if (cur.start == i.end + 1) {
                cur.start = i.start;
            } else {
                cur.start = min(cur.start, i.start);
                cur.end = max(cur.end, i.end);
            }
        }
        res.insert(res.begin() + pos, cur);
        v = res;
    }
    
    vector<Interval> getIntervals() {
        return v;
    }
private:
    vector<Interval> v;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * SummaryRanges obj = new SummaryRanges();
 * obj.addNum(val);
 * vector<Interval> param_2 = obj.getIntervals();
 */