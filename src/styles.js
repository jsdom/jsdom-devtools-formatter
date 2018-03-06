// matches https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/ui/inspectorSyntaxHighlight.css
// webkit-html-* styles
module.exports = {
  tag: `
    color: rgb(168, 148, 166);
  `,
  tagName: `
    color: rgb(136, 18, 128);
  `,
  attributeName: `
    color: rgb(153, 69, 0);
    unicode-bidi: -webkit-isolate;
  `,
  attributeValue: `
    color: rgb(26, 26, 166);
    unicode-bidi: -webkit-isolate;
  `,
  body: `
    list-style-type: none;
    margin: 0 0 0 12px;
  `,
  comment: `
    color: rgb(35, 110, 37);
  `,
  text: `
    color: black;
    unicode-bidi: -webkit-isolate;
  `
};
