/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

if (NAMESPACE == null
        || typeof (NAMESPACE) == 'undefined') {
    NAMESPACE = {};

    var id = function (id) {
        var _all_ids = new Array();
        var persona = {};
        var _id = id;

        var getId = function () {
            return _id;
        }

        persona.getId = getId;
        var _closed = false;
        
        var close = function () {
            delete _all_ids[getId()];
            this._closed = true;
        }
        
        persona.close = close;
        
        return persona;
    }

    NAMESPACE['id'] = id;
}