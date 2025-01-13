// hierarchical structure, always start with the root and have a left branch and a right branch
// left branch is a list of nodes, right branch is a list of nodes

class treeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {
    constructor() {
        this.root = null;
    }
    findData(data) {
        let current = this.root;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = (data <= current.data) ? current.left : current.right;
        }
        return false;
    }
}

const tree = new binaryTree();
tree.root = new treeNode(10);
tree.root.left = new treeNode(5);
tree.root.right = new treeNode(15);

console.log(tree.findData(10));



