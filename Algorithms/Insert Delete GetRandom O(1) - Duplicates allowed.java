public class RandomizedCollection {

    private Random random = new Random();
    private HashMap<Integer, HashSet<Integer>> map;
    private List<Integer> list;

    /** Initialize your data structure here. */
    public RandomizedCollection() {
        map = new HashMap<Integer, HashSet<Integer>>();
        list = new ArrayList<Integer>();
    }
    
    /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
    public boolean insert(int val) {
        if (map.containsKey(val)) {
            map.get(val).add(list.size());
            list.add(val);
            return false;
        } else {
            HashSet<Integer> set = new HashSet<Integer>();
            set.add(list.size());
            map.put(val, set);
            list.add(val);
            return true;
        }
    }
    
    /** Removes a value from the collection. Returns true if the collection contained the specified element. */
    public boolean remove(int val) {
        if (!map.containsKey(val)) {
            return false;
        }

        HashSet<Integer> indexSet = map.get(val);
        int index = indexSet.iterator().next();
        indexSet.remove(index);

        if (indexSet.isEmpty()) {
            map.remove(val);
        }

        if (index != list.size() - 1) {
            int tail = list.get(list.size() - 1);
            map.get(tail).remove(list.size() - 1);
            map.get(tail).add(index);
            list.set(index, tail);
        }

        list.remove(list.size() - 1);       

        return true;
    }
    
    /** Get a random element from the collection. */
    public int getRandom() {
        return list.get(random.nextInt(list.size()));
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection obj = new RandomizedCollection();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */