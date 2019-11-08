import patch from './lib/patch';
import h from './lib/h';
import VNode from './lib/VNode';
export { h, patch, VNode };
declare const _default: {
    patch: (oldVnode: any, vnode: VNode) => VNode;
    h: typeof h;
    VNode: typeof VNode;
};
export default _default;
