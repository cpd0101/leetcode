class AllOne(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.keyDict = {};
        self.valueDict = {};
        self.maxValue = 1;

    def inc(self, key):
        """
        Inserts a new key <Key> with value 1. Or increments an existing key by 1.
        :type key: str
        :rtype: void
        """
        if key in self.keyDict:
            if len(self.valueDict[self.keyDict[key]]) == 1:
                del self.valueDict[self.keyDict[key]];
            else:
                self.valueDict[self.keyDict[key]].remove(key);
            self.keyDict[key] += 1;
            self.maxValue += 1;
        else:
            self.keyDict[key] = 1;

        if self.valueDict.has_key(self.keyDict[key]):
            self.valueDict[self.keyDict[key]].append(key);
        else:
            self.valueDict[self.keyDict[key]] = [key];

    def dec(self, key):
        """
        Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
        :type key: str
        :rtype: void
        """
        if key in self.keyDict:
            if len(self.valueDict[self.keyDict[key]]) == 1:
                del self.valueDict[self.keyDict[key]];
            else:
                self.valueDict[self.keyDict[key]].remove(key);
            if self.keyDict[key] == 1:
                del self.keyDict[key];
            else:
                self.keyDict[key] -= 1;
                self.maxValue -= 1;
                if self.valueDict.has_key(self.keyDict[key]):
                    self.valueDict[self.keyDict[key]].append(key);
                else:
                    self.valueDict[self.keyDict[key]] = [key];
        

    def getMaxKey(self):
        """
        Returns one of the keys with maximal value.
        :rtype: str
        """
        for i in range(self.maxValue, 0, -1):
            if self.valueDict.has_key(i):
                return self.valueDict[i][0];
        return '';

    def getMinKey(self):
        """
        Returns one of the keys with Minimal value.
        :rtype: str
        """
        for i in range(1, self.maxValue + 1, 1):
            if self.valueDict.has_key(i):
                return self.valueDict[i][0];
        return '';


# Your AllOne object will be instantiated and called as such:
# obj = AllOne()
# obj.inc(key)
# obj.dec(key)
# param_3 = obj.getMaxKey()
# param_4 = obj.getMinKey()