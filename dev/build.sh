npm install
npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
npm install @cmfcmf/docusaurus-search-local
npx docusaurus start
npm run build


curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
# amplify configure
# https://docs.amplify.aws/cli/start/install/#option-1-watch-the-video-guide
# https://ibrahimcesar.cloud/blog/how-to-deploy-docusaurus-with-authentication-using-aws-amplify/
amplify init
amplify add hosting
amplify publish