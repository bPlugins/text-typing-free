// import gulp from 'gulp';
// import { deleteAsync } from 'del';

// gulp.task('clean', async () => await deleteAsync(['text-typing.zip', 'languages/*']));


import gulp from 'gulp';
import { deleteAsync } from 'del';

gulp.task('clean', async () => await deleteAsync(['text-typing.zip', 'languages/*']));
