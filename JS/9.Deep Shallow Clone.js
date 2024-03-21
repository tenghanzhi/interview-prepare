// 数据类型
// - 基本类型 栈内存 stack
// - 引用类型 堆内存 heap 指向堆内存中实际对象引用

// 浅拷贝
// - 只拷贝一层
// - 引用类型拷贝内存地址
Object.assign;
Array.prototype.slice();
Array.prototype.concat();
// 扩展运算符

// 深拷贝
// 开辟新的栈，两个对象的属性完全相同 对应两个不同地址，修改一个对象属性不会改变另一个属性
_.cloneDeep();
JSON.stringify(); //忽略undefined symbol 函数
recrution;

// 区别
// 浅拷贝只复制属性指向某个对象的指针，不复制对象本身，新旧对象共享同一块内存，修改对象属性会影响源对象
// 深拷贝创造一模一样的对象，新对象不共享内存，修改新对象不影响源对象
