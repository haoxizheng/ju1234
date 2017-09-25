module.exports = function (service) {
  // 新建
  require('./create.service')(service);

  // 获取列表
  require('./getTodoList.service')(service);

  // 详情
  require('./detail.service')(service);

  // 标记完成
  require('./done.service')(service);

  // 修改详情
  require('./update.service')(service);
};
