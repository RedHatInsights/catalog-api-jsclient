/**
 * Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CatalogApi);
  }
}(this, function(expect, CatalogApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CatalogApi.OrderItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderItem', function() {
    it('should create an instance of OrderItem', function() {
      // uncomment below and update the code to test OrderItem
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be.a(CatalogApi.OrderItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property serviceParameters (base name: "service_parameters")', function() {
      // uncomment below and update the code to test the property serviceParameters
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property providerControlParameters (base name: "provider_control_parameters")', function() {
      // uncomment below and update the code to test the property providerControlParameters
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property servicePlanRef (base name: "service_plan_ref")', function() {
      // uncomment below and update the code to test the property servicePlanRef
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property portfolioItemId (base name: "portfolio_item_id")', function() {
      // uncomment below and update the code to test the property portfolioItemId
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property orderedAt (base name: "ordered_at")', function() {
      // uncomment below and update the code to test the property orderedAt
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property completedAt (base name: "completed_at")', function() {
      // uncomment below and update the code to test the property completedAt
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new CatalogApi.OrderItem();
      //expect(instance).to.be();
    });

  });

}));