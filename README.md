SexyTooltips
============

With SexyTooltips is easier than ever to add nice clean tooltips to pages.

Usage
------

Insert the following into the `<head>` element.

    <script src="sexytooltips.js" type="text/javascript"></script>
    <link rel="stylesheet" href="sexytooltip.css" />

Then add the `.sexytooltip` class to any element you want to
display a clean toolwith.

If you want all elements with a `title` attribute to display
a clean tooltip, place the following in your `<head>` element also:

    <script type="text/javascript">
      $(document).on({
        mouseenter: function(){
          $(this).sexyTooltip();
        }
      }, '[title],[data-tooltip]');
    </script>

License
-------

SexyTooltips is released under the BSD 3-clause license.

Copyright
---------

Copyright (c) 2012 Nirix