// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as publisherModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1.PublisherClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath = publisherModule.v1.PublisherClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint = publisherModule.v1.PublisherClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = publisherModule.v1.PublisherClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new publisherModule.v1.PublisherClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new publisherModule.v1.PublisherClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.publisherStub, undefined);
      await client.initialize();
      assert(client.publisherStub);
    });

    it('has close method for the initialized client', done => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.publisherStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.publisherStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('publishChannelConnectionEvents', () => {
    it('invokes publishChannelConnectionEvents without error', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest',
        ['channelConnection']
      );
      request.channelConnection = defaultValue1;
      const expectedHeaderRequestParams = `channel_connection=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsResponse()
      );
      client.innerApiCalls.publishChannelConnectionEvents =
        stubSimpleCall(expectedResponse);
      const [response] = await client.publishChannelConnectionEvents(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.publishChannelConnectionEvents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.publishChannelConnectionEvents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes publishChannelConnectionEvents without error using callback', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest',
        ['channelConnection']
      );
      request.channelConnection = defaultValue1;
      const expectedHeaderRequestParams = `channel_connection=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsResponse()
      );
      client.innerApiCalls.publishChannelConnectionEvents =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.publishChannelConnectionEvents(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.eventarc.publishing.v1.IPublishChannelConnectionEventsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.publishChannelConnectionEvents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.publishChannelConnectionEvents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes publishChannelConnectionEvents with error', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest',
        ['channelConnection']
      );
      request.channelConnection = defaultValue1;
      const expectedHeaderRequestParams = `channel_connection=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.publishChannelConnectionEvents = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.publishChannelConnectionEvents(request),
        expectedError
      );
      const actualRequest = (
        client.innerApiCalls.publishChannelConnectionEvents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.publishChannelConnectionEvents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes publishChannelConnectionEvents with closed client', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest',
        ['channelConnection']
      );
      request.channelConnection = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(
        client.publishChannelConnectionEvents(request),
        expectedError
      );
    });
  });

  describe('publishEvents', () => {
    it('invokes publishEvents without error', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishEventsRequest',
        ['channel']
      );
      request.channel = defaultValue1;
      const expectedHeaderRequestParams = `channel=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishEventsResponse()
      );
      client.innerApiCalls.publishEvents = stubSimpleCall(expectedResponse);
      const [response] = await client.publishEvents(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.publishEvents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.publishEvents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes publishEvents without error using callback', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishEventsRequest',
        ['channel']
      );
      request.channel = defaultValue1;
      const expectedHeaderRequestParams = `channel=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishEventsResponse()
      );
      client.innerApiCalls.publishEvents =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.publishEvents(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.eventarc.publishing.v1.IPublishEventsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.publishEvents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.publishEvents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes publishEvents with error', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishEventsRequest',
        ['channel']
      );
      request.channel = defaultValue1;
      const expectedHeaderRequestParams = `channel=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.publishEvents = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.publishEvents(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.publishEvents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.publishEvents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes publishEvents with closed client', async () => {
      const client = new publisherModule.v1.PublisherClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.eventarc.publishing.v1.PublishEventsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.eventarc.publishing.v1.PublishEventsRequest',
        ['channel']
      );
      request.channel = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.publishEvents(request), expectedError);
    });
  });
});
