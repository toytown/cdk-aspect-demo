import * as cdk from "aws-cdk-lib";
import { CdkAspectDemoStack } from "../lib/cdk-aspect-demo-stack";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Aspects } from "aws-cdk-lib";
import { BucketVersioningChecker } from "../lib/BucketVersionCheckerAspect";
import { AwsSolutionsChecks, NagSuppressions } from "cdk-nag";

const app = new cdk.App();
const stack = new CdkAspectDemoStack(app, "CdkAspectDemoStack", {});

//your custom aspect BucketVersioningChecker
Aspects.of(stack).add(new BucketVersioningChecker());

// cdk-nag
Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));

NagSuppressions.addStackSuppressions(stack, [
  { id: "AwsSolutions-S2", reason: "lorem ipsum" },
]);

const bucket = new Bucket(stack, "MyBucket");
