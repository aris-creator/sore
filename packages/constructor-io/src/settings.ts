import { apiClientFactory } from '@vue-storefront/core';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { ConstructorIoSettings } from './types';

let constructorIo = null;

const onSetup = (settings: ConstructorIoSettings) => {
  constructorIo = new ConstructorIOClient(settings);
};

const apiClient = apiClientFactory<any, ConstructorIoSettings>({ defaultSettings: {}, onSetup });

export {
  apiClient,
  constructorIo
};
