'use strict';

import multer from 'multer';

const upload = multer({ dest: '/tmp/uploads/', limits: { fileSize: 2000000, files: 1 } });

const validate = upload.any();

export default validate;
