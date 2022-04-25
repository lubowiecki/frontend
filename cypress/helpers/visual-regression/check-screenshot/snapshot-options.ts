import { RetryOptions } from '../retry-options';

export interface SnapshotOptions {
	retryOptions?: RetryOptions;
	testThreshold?: number;
	wait?: number;
}
