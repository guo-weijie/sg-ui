/**
 * 江苏省行政区划数据（省 / 市 / 区·县 三级）
 *
 * 由 江苏省.geojson 转换生成：仅保留 adcode、名称与层级关系，
 * 已移除 geometry / center / centroid 等全部坐标数据。
 *
 * 节点字段：
 *   id        {String}  行政区划代码（字符串形式，避免大数字精度问题）
 *   name      {String}  名称
 *   noteType  {Number}  1-省 2-市 3-区/县（对应组件 nodeTypeLabels 的 key）
 *   parentId  {String}  上级行政区划代码
 *   adcode    {Number}  行政区划代码
 *   children  {Array}   下级节点
 */

// 节点类型常量
export const NODE_TYPE = {
  PROVINCE: 1,
  CITY: 2,
  DISTRICT: 3
}

// 三级完整树（省 -> 市 -> 区/县）
export const jiangsuAreaTree = [
  { id: '320000', name: '江苏省', noteType: 1, parentId: null, adcode: 320000, children: [
    { id: '320100', name: '南京市', noteType: 2, parentId: '320000', adcode: 320100, children: [
      { id: '320102', name: '玄武区', noteType: 3, parentId: '320100', adcode: 320102 },
      { id: '320104', name: '秦淮区', noteType: 3, parentId: '320100', adcode: 320104 },
      { id: '320105', name: '建邺区', noteType: 3, parentId: '320100', adcode: 320105 },
      { id: '320106', name: '鼓楼区', noteType: 3, parentId: '320100', adcode: 320106 },
      { id: '320111', name: '浦口区', noteType: 3, parentId: '320100', adcode: 320111 },
      { id: '320113', name: '栖霞区', noteType: 3, parentId: '320100', adcode: 320113 },
      { id: '320114', name: '雨花台区', noteType: 3, parentId: '320100', adcode: 320114 },
      { id: '320115', name: '江宁区', noteType: 3, parentId: '320100', adcode: 320115 },
      { id: '320116', name: '六合区', noteType: 3, parentId: '320100', adcode: 320116 },
      { id: '320117', name: '溧水区', noteType: 3, parentId: '320100', adcode: 320117 },
      { id: '320118', name: '高淳区', noteType: 3, parentId: '320100', adcode: 320118 }
    ] },
    { id: '320200', name: '无锡市', noteType: 2, parentId: '320000', adcode: 320200, children: [
      { id: '320205', name: '锡山区', noteType: 3, parentId: '320200', adcode: 320205 },
      { id: '320206', name: '惠山区', noteType: 3, parentId: '320200', adcode: 320206 },
      { id: '320211', name: '滨湖区', noteType: 3, parentId: '320200', adcode: 320211 },
      { id: '320213', name: '梁溪区', noteType: 3, parentId: '320200', adcode: 320213 },
      { id: '320214', name: '新吴区', noteType: 3, parentId: '320200', adcode: 320214 },
      { id: '320281', name: '江阴市', noteType: 3, parentId: '320200', adcode: 320281 },
      { id: '320282', name: '宜兴市', noteType: 3, parentId: '320200', adcode: 320282 }
    ] },
    { id: '320300', name: '徐州市', noteType: 2, parentId: '320000', adcode: 320300, children: [
      { id: '320302', name: '鼓楼区', noteType: 3, parentId: '320300', adcode: 320302 },
      { id: '320303', name: '云龙区', noteType: 3, parentId: '320300', adcode: 320303 },
      { id: '320305', name: '贾汪区', noteType: 3, parentId: '320300', adcode: 320305 },
      { id: '320311', name: '泉山区', noteType: 3, parentId: '320300', adcode: 320311 },
      { id: '320312', name: '铜山区', noteType: 3, parentId: '320300', adcode: 320312 },
      { id: '320321', name: '丰县', noteType: 3, parentId: '320300', adcode: 320321 },
      { id: '320322', name: '沛县', noteType: 3, parentId: '320300', adcode: 320322 },
      { id: '320324', name: '睢宁县', noteType: 3, parentId: '320300', adcode: 320324 },
      { id: '320381', name: '新沂市', noteType: 3, parentId: '320300', adcode: 320381 },
      { id: '320382', name: '邳州市', noteType: 3, parentId: '320300', adcode: 320382 }
    ] },
    { id: '320400', name: '常州市', noteType: 2, parentId: '320000', adcode: 320400, children: [
      { id: '320402', name: '天宁区', noteType: 3, parentId: '320400', adcode: 320402 },
      { id: '320404', name: '钟楼区', noteType: 3, parentId: '320400', adcode: 320404 },
      { id: '320411', name: '新北区', noteType: 3, parentId: '320400', adcode: 320411 },
      { id: '320412', name: '武进区', noteType: 3, parentId: '320400', adcode: 320412 },
      { id: '320413', name: '金坛区', noteType: 3, parentId: '320400', adcode: 320413 },
      { id: '320481', name: '溧阳市', noteType: 3, parentId: '320400', adcode: 320481 }
    ] },
    { id: '320500', name: '苏州市', noteType: 2, parentId: '320000', adcode: 320500, children: [
      { id: '320505', name: '虎丘区', noteType: 3, parentId: '320500', adcode: 320505 },
      { id: '320506', name: '吴中区', noteType: 3, parentId: '320500', adcode: 320506 },
      { id: '320507', name: '相城区', noteType: 3, parentId: '320500', adcode: 320507 },
      { id: '320508', name: '姑苏区', noteType: 3, parentId: '320500', adcode: 320508 },
      { id: '320509', name: '吴江区', noteType: 3, parentId: '320500', adcode: 320509 },
      { id: '320581', name: '常熟市', noteType: 3, parentId: '320500', adcode: 320581 },
      { id: '320582', name: '张家港市', noteType: 3, parentId: '320500', adcode: 320582 },
      { id: '320583', name: '昆山市', noteType: 3, parentId: '320500', adcode: 320583 },
      { id: '320585', name: '太仓市', noteType: 3, parentId: '320500', adcode: 320585 }
    ] },
    { id: '320600', name: '南通市', noteType: 2, parentId: '320000', adcode: 320600, children: [
      { id: '320602', name: '崇川区', noteType: 3, parentId: '320600', adcode: 320602 },
      { id: '320612', name: '通州区', noteType: 3, parentId: '320600', adcode: 320612 },
      { id: '320623', name: '如东县', noteType: 3, parentId: '320600', adcode: 320623 },
      { id: '320681', name: '启东市', noteType: 3, parentId: '320600', adcode: 320681 },
      { id: '320682', name: '如皋市', noteType: 3, parentId: '320600', adcode: 320682 },
      { id: '320684', name: '海门区', noteType: 3, parentId: '320600', adcode: 320684 },
      { id: '320685', name: '海安市', noteType: 3, parentId: '320600', adcode: 320685 }
    ] },
    { id: '320700', name: '连云港市', noteType: 2, parentId: '320000', adcode: 320700, children: [
      { id: '320703', name: '连云区', noteType: 3, parentId: '320700', adcode: 320703 },
      { id: '320706', name: '海州区', noteType: 3, parentId: '320700', adcode: 320706 },
      { id: '320707', name: '赣榆区', noteType: 3, parentId: '320700', adcode: 320707 },
      { id: '320722', name: '东海县', noteType: 3, parentId: '320700', adcode: 320722 },
      { id: '320723', name: '灌云县', noteType: 3, parentId: '320700', adcode: 320723 },
      { id: '320724', name: '灌南县', noteType: 3, parentId: '320700', adcode: 320724 }
    ] },
    { id: '320800', name: '淮安市', noteType: 2, parentId: '320000', adcode: 320800, children: [
      { id: '320803', name: '淮安区', noteType: 3, parentId: '320800', adcode: 320803 },
      { id: '320804', name: '淮阴区', noteType: 3, parentId: '320800', adcode: 320804 },
      { id: '320812', name: '清江浦区', noteType: 3, parentId: '320800', adcode: 320812 },
      { id: '320813', name: '洪泽区', noteType: 3, parentId: '320800', adcode: 320813 },
      { id: '320826', name: '涟水县', noteType: 3, parentId: '320800', adcode: 320826 },
      { id: '320830', name: '盱眙县', noteType: 3, parentId: '320800', adcode: 320830 },
      { id: '320831', name: '金湖县', noteType: 3, parentId: '320800', adcode: 320831 }
    ] },
    { id: '320900', name: '盐城市', noteType: 2, parentId: '320000', adcode: 320900, children: [
      { id: '320902', name: '亭湖区', noteType: 3, parentId: '320900', adcode: 320902 },
      { id: '320903', name: '盐都区', noteType: 3, parentId: '320900', adcode: 320903 },
      { id: '320904', name: '大丰区', noteType: 3, parentId: '320900', adcode: 320904 },
      { id: '320921', name: '响水县', noteType: 3, parentId: '320900', adcode: 320921 },
      { id: '320922', name: '滨海县', noteType: 3, parentId: '320900', adcode: 320922 },
      { id: '320923', name: '阜宁县', noteType: 3, parentId: '320900', adcode: 320923 },
      { id: '320924', name: '射阳县', noteType: 3, parentId: '320900', adcode: 320924 },
      { id: '320925', name: '建湖县', noteType: 3, parentId: '320900', adcode: 320925 },
      { id: '320981', name: '东台市', noteType: 3, parentId: '320900', adcode: 320981 }
    ] },
    { id: '321000', name: '扬州市', noteType: 2, parentId: '320000', adcode: 321000, children: [
      { id: '321002', name: '广陵区', noteType: 3, parentId: '321000', adcode: 321002 },
      { id: '321003', name: '邗江区', noteType: 3, parentId: '321000', adcode: 321003 },
      { id: '321012', name: '江都区', noteType: 3, parentId: '321000', adcode: 321012 },
      { id: '321023', name: '宝应县', noteType: 3, parentId: '321000', adcode: 321023 },
      { id: '321081', name: '仪征市', noteType: 3, parentId: '321000', adcode: 321081 },
      { id: '321084', name: '高邮市', noteType: 3, parentId: '321000', adcode: 321084 }
    ] },
    { id: '321100', name: '镇江市', noteType: 2, parentId: '320000', adcode: 321100, children: [
      { id: '321102', name: '京口区', noteType: 3, parentId: '321100', adcode: 321102 },
      { id: '321111', name: '润州区', noteType: 3, parentId: '321100', adcode: 321111 },
      { id: '321112', name: '丹徒区', noteType: 3, parentId: '321100', adcode: 321112 },
      { id: '321181', name: '丹阳市', noteType: 3, parentId: '321100', adcode: 321181 },
      { id: '321182', name: '扬中市', noteType: 3, parentId: '321100', adcode: 321182 },
      { id: '321183', name: '句容市', noteType: 3, parentId: '321100', adcode: 321183 }
    ] },
    { id: '321200', name: '泰州市', noteType: 2, parentId: '320000', adcode: 321200, children: [
      { id: '321202', name: '海陵区', noteType: 3, parentId: '321200', adcode: 321202 },
      { id: '321203', name: '高港区', noteType: 3, parentId: '321200', adcode: 321203 },
      { id: '321204', name: '姜堰区', noteType: 3, parentId: '321200', adcode: 321204 },
      { id: '321281', name: '兴化市', noteType: 3, parentId: '321200', adcode: 321281 },
      { id: '321282', name: '靖江市', noteType: 3, parentId: '321200', adcode: 321282 },
      { id: '321283', name: '泰兴市', noteType: 3, parentId: '321200', adcode: 321283 }
    ] },
    { id: '321300', name: '宿迁市', noteType: 2, parentId: '320000', adcode: 321300, children: [
      { id: '321302', name: '宿城区', noteType: 3, parentId: '321300', adcode: 321302 },
      { id: '321311', name: '宿豫区', noteType: 3, parentId: '321300', adcode: 321311 },
      { id: '321322', name: '沭阳县', noteType: 3, parentId: '321300', adcode: 321322 },
      { id: '321323', name: '泗阳县', noteType: 3, parentId: '321300', adcode: 321323 },
      { id: '321324', name: '泗洪县', noteType: 3, parentId: '321300', adcode: 321324 }
    ] }
  ] }
]

// 扁平索引：id -> 节点（含 children 引用）
export const jiangsuAreaMap = (() => {
  const map = {}
  const walk = nodes => {
    nodes.forEach(node => {
      map[node.id] = node
      if (node.children && node.children.length) walk(node.children)
    })
  }
  walk(jiangsuAreaTree)
  return map
})()

// 顶层（省级）节点，用于组件的 initial-nodes
// 已剔除 children，子组件通过 load-children 按需加载
export const jiangsuProvinceNodes = jiangsuAreaTree.map(node => ({
  id: node.id,
  name: node.name,
  noteType: node.noteType,
  parentId: node.parentId,
  adcode: node.adcode
}))

/**
 * 获取指定节点的下级节点（用于 load-children 回调）
 * @param {String} parentId 上级行政区划代码
 * @returns {Array} 下级节点浅拷贝（不含 children）
 */
export function getAreaChildren(parentId) {
  const node = jiangsuAreaMap[parentId]
  if (!node || !node.children) return []
  return node.children.map(child => ({
    id: child.id,
    name: child.name,
    noteType: child.noteType,
    parentId: child.parentId,
    adcode: child.adcode
  }))
}

/**
 * 获取指定节点的完整路径（省 / 市 / 区·县 名称数组）
 * @param {String} id 行政区划代码
 * @returns {Array<String>} 如 ['江苏省', '南京市', '玄武区']
 */
export function getAreaPath(id) {
  const path = []
  let current = jiangsuAreaMap[id]
  while (current) {
    path.unshift(current.name)
    current = current.parentId ? jiangsuAreaMap[current.parentId] : null
  }
  return path
}

export default jiangsuAreaTree
