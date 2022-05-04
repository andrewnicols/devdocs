<?php
// Example of a list array with all the element types.
$list = [
    // 'path' is used to build navigation bar to show the current folder, so you need to include all parents folders
    // array(array('name'=>'root','path'=>'/'), array('name'=>'subfolder', 'path'=>'/subfolder'))
    // This will result in: /root/subfolder as current directory
    'path' => (array), // this will be used to build navigation bar,

    // 'dynload' tells file picker to fetch list dynamically.
    // When user clicks the folder, it will send a ajax request to server side.
    // Default value is false but note that non-Javascript file picker always acts as if dynload was set to true
    'dynload' => (bool), // use dynamic loading,

    // If you are using pagination, 'page' and 'pages' parameters should be set.
    // It is not recommended to use pagination and subfolders at the same time, the tree view mode can not handle it correctly
    'page' => (int), // which page is this list,
    'pages' => (int), // how many pages. If number of pages is unknown but we know that the next page exists repository may return -1,
    'manage' => (string), // url to file manager for the external repository, if specified will display link in file picker,
    'help' => (string), // url to the help window, if specified will display link in file picker,
    'nologin' => (bool), // requires login, default false, if set to true the login link will be removed from file picker,
    'norefresh' => (bool), // no refresh button, default false,
    'logouttext' => (string), // in case of nologin=false can substitute the text 'Logout' for logout link in file picker,
    'nosearch' => (bool), // no search link, default false, if set to true the search link will be removed from file picker,
    'issearchresult' => (bool), // tells that this listing is the result of search,
    // for repositories that actually upload a file: set 'upload' option to display an upload form in file picker
    'upload' => [ // upload manager
        'label' => (string), // label of the form element,
        'id' => (string), // id of the form element,
    ],
    // 'list' is used by file picker to build a file/folder tree
    'list' => [
        [ // file
          'title' => (string), // file name,
          'shorttitle' => (string), // optional, if you prefer to display a short title
          'date' => (int) // UNIX timestamp, default value for datemodified and datecreated,
          'datemodified' => (int), // UNIX timestamp when the file was last modified [      'datecreated' => (int) UNIX timestamp when the file was last created [2.3+](2.3+],
          'size' => (int) // file size in bytes,
          'thumbnail' => (string), // url to thumbnail for the file,
          'thumbnail_width' => (int), // the width of the thumbnail image,
          'thumbnail_height' => (int), // the height of the thumbnail image,
          'source' => (string) // plugin-dependent unique path to the file (id, url, path, etc.),
          'url' => (moodle_url) // the accessible url of file,
          'icon' => (string), // url to icon of the image (24x24px), if omitted the moodle filetype icon will be used [      'realthumbnail' => (string) url to image preview to be lazy-loaded when scrolled to it (if it requires to be generated and can not be returned as 'thumbnail') [2.3+](2.3+],
          'realicon' => (string), // url to image preview in icon size (24x24) [      'author' => (string) default value for file author,
          'license' => (string), // default value for license (short name, see class license_manager),
          'image_height' => (int), // if the file is an image, image height in pixels, null otherwise [2.3+](2.3+],
          'image_width' =>  (int), // if the file is an image, image width in pixels, null otherwise [    ),
        ],
        [ // folder - similar to file, has also 'path' and 'children' but no 'source' or 'url'
            'title' => (string) // folder name,
            'shorttitle' => (string) // optional, if you prefer to display a short title
            'path' => (string) // path to this folder. In case of dynload=true (and for non-JS filepicker) the value will be passed to repository_xxx::get_listing() in order to retrieve children
            'date' => (int),
            'datemodified' => (int),
            'datecreated' => (int),
            'thumbnail' => (string),
            'icon' => ,// see above,
            'children' => [
              // presence of this attribute actually tells file picker that this is a folder. In case of dynload=true, it should be empty array
              // otherwise it is a nested list of contained files and folders
            ],
        ],
    ],
    // The 'object' tag can be used to embed an external web page or application within the filepicker
    'object' => [
       'type' => (string), // e.g. 'text/html', 'application/x-shockwave-flash'
       'src' => (string), // the website address to embed in the object
    ],
]
