'use strict';

const UserDataSource = require('./UserDataSource');
const { PubSub } = require('@google-cloud/pubsub');

module.exports = class extends UserDataSource {
  constructor() {
    super();
    this.pubsub = new PubSub({projectId: 'blogeekplatzi'});
    this.topicName = 'usuariosNuevos';
    this.initTopic();
  }

  initTopic() {
    this.pubsub.createTopic(this.topicName)
        .catch((err) => {
        console.error(err);
        return null;
    });
  }

  save(user) {
    const data = JSON.stringify(user);
    const dataBuffer = Buffer.from(data);
    return this.pubsub
        .topic(this.topicName)
        .publisher()
        .publish(dataBuffer);
  }
};
