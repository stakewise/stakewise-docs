---
description: Learn how to change Solo withdrawal credentials to 0x01 address using macOS.
cover: ../../../.gitbook/assets/Frame 27513376 (1).png
coverY: 0
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Using macOS

{% hint style="warning" %}
Ensure that the Apple machine you are using for executing the change in withdrawal credentials is not infected with any malware and can be disconnected from the Internet at a certain stage of the credentials change process.&#x20;

If you are not using anti-virus software regularly, we recommend that you use a trial version of malwarebytes.com to conduct a full scan of your machine before proceeding with the credentials change process.&#x20;
{% endhint %}

{% hint style="info" %}
You will need the mnemonic (seed phrase) you used for creating Solo validators to execute this procedure. Do not discard the mnemonic (seed phrase) after you complete the procedure and continue to keep it safe (ideally stored offline or on an airgapped machine).
{% endhint %}

{% hint style="info" %}
You will need to provide a withdrawal address where your validator funds will be withdrawn to. Make sure that the address you choose is not compromised, does not have approvals for ETH spending to unknown contracts, and is overall safe to use.
{% endhint %}

Executing a change of withdrawal credentials on a Mac is a fairly straightforward process. We will:

* [ ] Find out the public BLS credentials of your Solo validators
* [ ] Download and launch `staking_deposit-cli` using **Terminal**
* [ ] Generate a .json file for rotating withdrawal credentials to 0x01 address
* [ ] Broadcast the .json file's message to the Ethereum Network

The whole procedure will take at most 10 minutes.

## Find out your BLS withdrawal credentials

Before we can begin the credentials change procedure, you will need to get a list of public BLS credentials for all of your Solo validators.&#x20;

1. Go to [**StakeWise Solo**](https://v2.stakewise.io/solo) page and connect the wallet you used for registering the validators
2. Ensure that all of your validator bills are paid
3. Click on `Credentials change` button and download the file under the first step of "Change credentials using CLI". It will download a list of your validator indices and withdrawal credentials that is required for later.

You should end up with a **text file** with two lists on two separate lines:

1. Validator indices, each separated by comma (`Validator index list`)
2. Withdrawal credentials, each separated by comma, matching the order of respective validator indices (`Withdrawal credentials list`)

{% hint style="success" %}
You have successfully completed step 1 of this tutorial.&#x20;
{% endhint %}

## Download and launch Ethereum Staking Deposit CLI

1. Launch **Terminal** on your Mac and enter the following command to download the latest release of the `staking_deposit-cli` by StakeWise:

```
curl -OL https://github.com/stakewise/staking-deposit-cli/releases/download/v2.5.1/staking_deposit-cli-e53772b-darwin-amd64.tar.gz
```

{% hint style="info" %}
This version of the `staking_deposit-cli` is based on the original `cli` by the Ethereum Foundation which was modified by StakeWise. You can track all the changes vs the original `cli` [here](https://github.com/ethereum/staking-deposit-cli/compare/master...stakewise:staking-deposit-cli:master).
{% endhint %}

2. Disconnect your Mac from the Internet / disable Internet at your location to prevent possible intereference with the next steps

{% hint style="danger" %}
Failing to disconnect from the Internet might expose your machine to online interference with the credentials change procedure and result in a loss of all funds. We strongly recommend disconnecting / disabling the Internet connection at your location before you proceed.
{% endhint %}

2. Enter the following command into the **Terminal** to extract the downloaded files:

```
tar -zxf staking_deposit-cli-e53772b-darwin-amd64.tar.gz
```

4. Navigate to the extracted files using the following command in the **Terminal**:&#x20;

```
cd staking_deposit-cli-e53772b-darwin-amd64
```

5. Launch the `staking_deposit-cli` and initiate the credentials change process with the following command in the **Terminal**:

```
./deposit generate-bls-to-execution-change
```

{% hint style="info" %}
If you are getting `zsh: bad CPU type in executable` error then your Mac has an Apple Silicon chip and requires Rosetta 2 to be installed first. Enter `cd` into the **Terminal**, then enter `softwareupdate --install-rosetta.` After the installation, start over from **step 4**.&#x20;
{% endhint %}

At this stage, you should see the tool running, asking for your choice of language before you proceed.

{% hint style="success" %}
You have successfully completed step 2 of this tutorial.&#x20;
{% endhint %}

## Generate a .json file for credentials rotation

1. Choose your preferred language for the procedure by entering the relevant number in the **Terminal** (use `3` for English):
2. Type in `mainnet` into the **Terminal** when prompted to choose the network
3. Type in your mnemonic (seed phrase) into the **Terminal** when prompted to choose the network (every word must be separated by a space)
4. Type `0` into the **Terminal** when prompted to enter the index position for the keys
5. Copy the `Validator index list` from the **text file** you downloaded from StakeWise and paste into the **Terminal** when prompted to enter the list of validator index numbers
6. Copy the `Withdrawal credentials list` from the **text file** you downloaded from StakeWise and paste into the **Terminal** when prompted to enter the list of old BLS withdrawal credentials
7. Copy the withdrawal address you would like to use for the withdrawal of validator funds and paste into the **Terminal** when prompted to enter the new execution address

{% hint style="danger" %}
Please double-check the withdrawal address you insert to ensure that you entered the correct address. Entering the wrong address will result in a loss of all funds.&#x20;
{% endhint %}

8. Copy and paste the withdrawal address into the **Terminal** again when asked to repeat

At this stage, you will have generated a .json file that can be found in the `staking_deposit-cli` folder.&#x20;

{% hint style="success" %}
You have successfully completed step 3 of this tutorial.&#x20;
{% endhint %}

## Broadcast the .json file message to the network

1. Head to the [**Beacon Chain Explorer**](https://beaconcha.in/tools/broadcast) website
2. Upload your .json file into the relevant form.&#x20;

At this stage, your BLS withdrawal credentials should be changed to 0x01 withdrawal address to enable partial and full withdrawals for your Solo validators. Congratulations!

{% hint style="success" %}
You have now successfully completed all 4 steps of this tutorial and learned how to execute the rotation of BLS withdrawal credentials to 0x01 withdrawal address.
{% endhint %}

{% hint style="info" %}
If you are unsure whether the procedure was successful, in about 1 hour after the procedure visit https://beaconcha.in/validator/**index**#withdrawals by replacing "index" with your actual validator index (e.g. [https://beaconcha.in/validator/156849#withdrawals](https://beaconcha.in/validator/156849#withdrawals)). If the procedure was successful, then you should see an expected date of the first partial withdrawal (i.e. rewards payout) from your validator. If you don't see it, please refer to the guide again.
{% endhint %}
