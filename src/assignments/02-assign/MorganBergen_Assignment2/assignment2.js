
/**
 * @file       assignment2.js
 * @author     Morgan Bergen
 * @date       Mon Sept 19 2022
 * @brief      assignment 02
 * @description 
 * 
 * assignment instructions
 * - the standard javascipt enviroment provides another data structure called set
 * - a set holds a collection of values
 * - a value can be part of a set only once - adding it again does not effect anything
 * 
 * write a class called group
 * - group should have 6 methdods
 * - add, delete, has, union, intersect, and difference
 * - its constructor creates an empty group
 * - add adds a value to the group (but only if it isnt already a member)
 * - delete removes its argument from the group (if it was a member)
 * - has returns a boolean value indicating whether its argument is a member of the group
 * - union creates a new group that contains all the values from both groups
 * - intersect creates a new group that contains only the values that are part of both groups
 * - difference creates a new group that contains all the values that are part of the first group but not the second
 */

class Group {

    /**
     * constructs a new group that has all the values for the group on which it was called
     * @param None
     */
    constructor() {
        this.group = [];
    }


    /**
    * Appends new elements to the end of the group, if there is no repeated value already   
    * pre-existing in the group then the push method will be called and thus will give an 
    * option to returns the new new group
    * @param val new element to added to the group.
    */
    add(val) {
        if (this.has(val) === false) {
            this.group.push(val);
        }
    }

    /**
     * Determines whether the group includes a certain element, 
     * returning true or false as appropriate.
     * @param val The element to search for.
     */
    has(val) {
        return (this.group.includes(val));
    }

    /**
     * delete the element from the group
     * @param val The element to delete.
     * @returns the new group
     */
    delete(val) {
        if (this.has(val) === true) {
            this.group = this.group.filter((v) => v !== val);
        }
    }

    /**
    * union returns the union of the group and the argument, which should be another group
    * @param group_param The group to be unioned with the group
    * @returns the new group ∪
    */
    union(group_param) {
        let union = new Group();
        for (let x of this.group) {
            union.add(x);
        }
        for (let x of group_param.group) {
            union.add(x);
        }
        return union;
    }

    /**
     * intersect returns the intersection of the group and the argument, which should be another group
     * @param group_param The group to be intersected with the group
     * @returns the new group ∩
     */
    intersect(group_param) {
        let intersect = new Group();
        for (let x of this.group) {
            if (group_param.has(x) === true) {
                intersect.add(x);
            }
        }
        return intersect;
    }

    /**
     * difference returns the difference of the group and the argument, which should be another 
     * group.
     * @param group_compare The group to be differenced with the group
     * @returns the new group - 
     */
    difference(group_compare) {
        let difference = new Group();
        for (let x of this.group) {
            if (group_compare.has(x) === false) {
                difference.add(x);
            }
        }
        return difference;
    }
}

let group1 = new Group();
let group2 = new Group();
group1.add(1);
group1.add(2);
group1.add(3);
console.log(group1);
group2.add(2);
group2.add(3);
group2.add(5);
console.log(group2);
console.log(group1.has(5));
console.log(group2.has(3));
console.log(group1.union(group2));
console.log(group1.intersect(group2));
console.log(group1.difference(group2));
group1.delete(1);
console.log(group1);
group2.delete(1);
console.log(group2);
