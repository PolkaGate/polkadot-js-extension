// Copyright 2017-2024 @polkadot/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Do not edit, auto-generated by @polkadot/dev
// (packageInfo imports will be kept as-is, user-editable)

import { packageInfo as chainsInfo } from '@polkadot/extension-chains/packageInfo';
import { packageInfo as dappInfo } from '@polkadot/extension-dapp/packageInfo';
import { packageInfo as injectInfo } from '@polkadot/extension-inject/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo.js';

detectPackage(packageInfo, null, [chainsInfo, dappInfo, injectInfo]);