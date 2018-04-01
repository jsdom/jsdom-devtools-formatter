module.exports = `
<article id="root" class="some root element" data-foo-bar="baz">
  <h1 class="first">
    An example of formatting
  </h1>

  <!-- intended to manually verify various types in the DOM tree -->

  <div class="body content">
    <p>
      The formatter should output shorter texts inline
    </p>
    <p>
      Somewhat longer text have to be expanded to be visible
    </p>
    <p class="long-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  <p>
    <span class="another-example">Hello world!</span>
  </p>
</article>

and some random text outside elements
`.trim()
