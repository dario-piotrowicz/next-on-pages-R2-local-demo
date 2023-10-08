
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string | undefined;
			MY_R2: R2Bucket;
		}
	}
}

export {};
