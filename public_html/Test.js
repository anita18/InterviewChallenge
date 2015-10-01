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
     * Another user logs in the application
     */
    var user2_ref = NAMESPACE['id'](3);

    assert.strictEqual(user2_ref.getId(), 3, 'Another User Loged in with id 3');


    var user3_ref = NAMESPACE['id'](2);

    assert.strictEqual(typeof user3_ref, "object", 'Type of user_ref is object');

    /**
     * We can get the logged in user Id any time using the user_ref variable
     */
    assert.strictEqual(user3_ref.getId(), 2, 'Again another user logged in with id same 2');

    /**
     * First user logs out from the system
     */
    assert.strictEqual(user3_ref.close(), true, 'User3_ref logs out of the system');

});





/**
 *------------------------------------------ TEST RESULT--------------------------------------
 * 
 * Type of user_ref is object
 * Got logged in user id
 * Another User Loged in with id 3
 * Type of user_ref is object
 * Again another user logged in with id same 2
 * User3_ref logs out of the system
 */
