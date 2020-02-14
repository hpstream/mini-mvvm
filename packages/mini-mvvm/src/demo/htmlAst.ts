 enum ENodeType {
  
    Element = 1, // 元素节点
    Text = 3, //文本节点
    /**
     * 注释节点
     */
    Comment = 8,

    /**
     * fragment 容器
     */
    DocumentFragment = 11
}

interface Ast {
  tag:string,
  children?:Ast[],
  text?:string,
  type: ENodeType;
  props?:Record<string,any>
  attrs?:Record<string,any>
}

export function render(el: string | Element) {
      let node;
      if (typeof el === "string") {
        node = document.querySelector(el);
      }else{
        node = el;
      }
      
       const ast = parseElement2AST(node);
      //  console.log(ast)
       node.remove();
}

function toArray<T>(likeArray:any): T[] {
  return [].slice.call(likeArray);
}
function parseElement2AST(node: Element): Ast {
    if(node.nodeType == ENodeType.Text){
      return {
        tag: "",
        type: ENodeType.Text,
        text:node.textContent
      };
    }

    if(node.nodeType == ENodeType.Element){
         let children = toArray<Element>(node.childNodes).map(element => {
           return parseElement2AST(element);
         });
         let attrsMap = toArray<Attr>(node.attributes).reduce((map, cur) => {
           map[cur.name] = cur.value;
           return map;
         }, {});

         let ast: Ast = {
           tag: node.tagName.toLowerCase(),
           type: ENodeType.Element,
           children,
           attrs:attrsMap
         };


         return ast;
    }
   


}

function AstToVdom(ast:Ast) {
  
}