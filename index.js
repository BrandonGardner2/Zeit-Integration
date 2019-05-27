const { withUiHook } = require("@zeit/integration-utils");

let count = 0;

module.exports = withUiHook(async ({ payload, zeitClient }) => {
  const metadata = await zeitClient.getMetadata();
  metadata.count = metadata.count || 0;
  metadata.count += 1;
  await zeitClient.setMetadata(metadata);

  return `
    <Page>
        <P>Counter: ${metadata.count}</P>
        <Button>Count Me</Button>
    </Page>
    `;
});
