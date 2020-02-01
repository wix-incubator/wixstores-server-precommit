function getPrecommitScript(fileHeader, version) {
  return `# ${fileHeader} ${version}
BRANCH_NAME=\`git rev-parse --abbrev-ref HEAD\`
if [[ $BRANCH_NAME != master ]] ;
then
  exit 0
fi

STAGED=\`git diff --name-only --cached\`
SERVER_PATHS=($(<SERVER_FOLDERS))
for staged in $STAGED; do
  for path in "\${SERVER_PATHS[@]}"; do
    if  [[ $staged == $path* ]] ;
    then
        printf '"%s" cant be committed when on "master" branch, you may have forgotten to open a branch\n' $staged
        exit 1
    fi
  done
done
# end ${fileHeader}`;
}

module.exports = {getPrecommitScript};