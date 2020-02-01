function getPrecommitScript(fileHeader, version) {
  return `# ${fileHeader} ${version}
BRANCH_NAME=\`git rev-parse --abbrev-ref HEAD\`
if [[ $BRANCH_NAME != master ]] ;
then
  exit 0
fi

STAGED=\`git diff --name-only --cached\`
SERVER_PATHS=("server/wix-ecommerce-server" "server/currency-converter"  "server/wix-ecommerce-server" "commons-server" "platform/addresses/server" "platform/coupons")
for staged in $STAGED; do
  for path in "\${SERVER_PATHS[@]}"; do
    if  [[ $staged == $path* ]] ;
    then
        echo $staged
        exit 1
    fi
  done
done
exit 0
# end ${fileHeader}`;
}

module.exports = {getPrecommitScript};