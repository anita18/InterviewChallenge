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

(function() {

    if (typeof NAMESPACE === 'undefined' || NAMESPACE === null) {
        NAMESPACE = {};
    }

    if (typeof NAMESPACE.id === 'undefined' || NAMESPACE.id === null) {

        /**
         * id() function will be associated with the user and can be called for specific user id, but
         * As you have mentioned that _all_ids should be protected so that others can't access that, but still allow each id instance to see a single _all_ids,
         * So we have made _all_ids to be local to self execuiting block and id function can have single _all_ids access.
         */
//        var _all_ids = new Array();
        var user_sessions = {};

        var id = function(id) {

            var persona = {};
            var _id = id;

            /**
             * Stores the user login id into active user array list.
             */
//            _all_ids.push(_id);

            if (user_sessions[_id] !== undefined && user_sessions[_id] !== null) {
                var session_array = user_sessions[_id];
                var flag = true;

                while (flag) {

                    var random_no = Math.floor(Math.random() * 100) + 1; // taken the limit as 100 for example

                    if (session_array.indexOf(random_no) === -1) {
                        persona.sessionId = random_no;
                        session_array.push(random_no)
                        flag = false;
                    }
                }
                user_sessions[_id] = session_array;

            } else {

                user_sessions[_id] = [];
                var sessionId = Math.floor(Math.random() * 100) + 1; // taken the limit as 100 for example
                persona.sessionId = sessionId;
                user_sessions[_id].push(sessionId);
            }
            var getId = function() {
                return _id;
            };

            persona.getId = getId;
            var _closed = false;

            var close = function() {
                

                /**
                 * Got session id as parameter from user persona object and removed user that session from the map 
                 * 
                 */
                var id = getId();
                var session_array = user_sessions[id];
                var index = session_array.indexOf(this.sessionId);
                session_array.splice(index, 1);
                user_sessions[id] = session_array;
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
})();

