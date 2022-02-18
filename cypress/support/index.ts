import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

import './get-by-test-id';
import './find-by-test-id';
import './check-screenshot';

addMatchImageSnapshotCommand({
	customSnapshotsDir: 'cypress/screenshots',
	failureThreshold: 0,
	failureThresholdType: 'percent',
	customDiffConfig: { threshold: 0 },
});
