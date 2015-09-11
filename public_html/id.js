/**
 *  NAMESPACE is checked for null ,before being checked for undefined. 
 *  If the variable NAMESPACE is not defined it will give error at the time of nullity check. 
 *  So variable undefined check condition should be before null check condition.
 *   
 *  typeof operator is used to know the operand type. 
 *  Its not a function so the syntax for typeof should be 'typeof NAMESPACE'. 
 *  It'll not throw error if we use typeof as function,but that's not correct.
 *   
 */
if (typeof NAMESPACE === 'undefined' || NAMESPACE === null
        ) {

    NAMESPACE = {};

    /**
     * id() function will be associated with the user and can be called for specific user id, but
     * we want _all_ids to be global so that we can get the all active logged in user ids.
     */
    _all_ids = new Array();

    var id = function(id) {

        var persona = {};
        var _id = id;

        /**
         * Stores the user login id into active user array list.
         */
        _all_ids.push(_id);

        var getId = function() {
            return _id;
        };

        persona.getId = getId;
        var _closed = false;

        var close = function() {

            /**
             * delete operator on array, only deletes the array element, but does not modifies array length. 
             * splice(using element index) deletes the element and also accordingly updates array length.
             */
            var index = _all_ids.indexOf(getId());
            _all_ids.splice(index, 1);


            /**
             *  Here this keyword refer to global window object, which is different from the id() function scope. 
             *  So the _closed variable used at line 66 in this file, and the _closed variable used at line 32 in this file, 
             *  will be different variables at different scope levels.
             */
            _closed = true;

            /**
             * persona.close store the value what is returned by the close() method, but close() method doesn't return any thing.
             * And so the property close of persona object doesn't stored anything. 
             * The close() method should return value,that will be stored in persona.close variable. 
             * And as here _closed variable is unused , so that can be the value, which should be retuned by this method.
             */
            return _closed;
        };

        persona.close = close;

        return persona;
    };

    NAMESPACE['id'] = id;
}



QUnit.test('User Login', function(assert) {


    /**
     * At the time of Login We Store the persona object reference for user id
     */
    var user1_ref = NAMESPACE['id'](2);

    assert.strictEqual(typeof user1_ref, "object", 'Type of user_ref is object');

    /**
     * We can get the logged in user Id any time using the user_ref variable
     */
    assert.strictEqual(user1_ref.getId(), 2, 'Got logged in user id');

    /**
     * We can get the logged in user count any time using the user_ref variable
     */
    assert.strictEqual(_all_ids.length, 1, 'Only 1 user is logged in');

    /**
     * Another user logs in the application
     */
    var user2_ref = NAMESPACE['id'](3);

    assert.strictEqual(user2_ref.getId(), 3, 'Another User Loged in with id 3');

    /**
     * logged in user count is checked, now it should be 2
     */
    assert.strictEqual(_all_ids.length, 2, 'Logged in user count is 2');

    /**
     * First user logs out from the system
     */
    assert.strictEqual(user1_ref.close(), true, 'User 1 logs out of the system');

    /**
     * logged in user count is checked, now it should be 1
     */
    assert.strictEqual(_all_ids.length, 1, 'Logged in user count is 1');
});


/**
 *       Test Result
 * 
 * Type of user_ref is object
 * Got logged in user id
 * Only 1 user is logged in
 * Another User Loged in with id 3
 * Logged in user count is 2
 * User 1 logs out of the system
 * Logged in user count is 1
 */