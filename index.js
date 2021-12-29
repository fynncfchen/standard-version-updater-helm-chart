module.exports.readVersion = function (contents) {
  const matches = contents.match(/^appVersion:\s*(.*)$/m);
  const version = matches[1].replace(/'|"/, '');
  return version;
};

module.exports.writeVersion = function (contents, version) {
  const updated = contents.replace(
    /^appVersion:\s*(.*)$/m,
    `appVersion: '${version}'`
  );
  return updated;
};
