Atlanta Population:


1. db.zipcodes.find({"city" : "ATLANTA", "state" : "GA"})


2. db.zipcodes.aggregate([{
    $match: {"city" : "ATLANTA", "state" : "GA"}
}])

3. db.zipcodes.aggregate([
    {$match: {"city" : "ATLANTA"}},
    { $group: {_id: "$city", count: {$sum: 1}}}
])


4. db.zipcodes.aggregate([
    {$match: {"city" : "ATLANTA"}},
    { $group: {_id: "$city", count: {$sum: "$pop"}}}
])

Populations By State:


5. db.zipcodes.aggregate([
{ $group: { _id: { state: "$state"}, pop: { $sum: "$pop" } } },
])


6. db.zipcodes.aggregate([
{ $group: { _id: { state: "$state"}, pop: {$sum: "$pop" } } },
{$sort: { pop: -1}}
])


7. db.zipcodes.aggregate([
{ $group: { _id: { state: "$state"}, pop: {$sum: "$pop" } } },
{$sort: { pop: -1}},
{$limit: 3}
])

Populations by City:


8. db.zipcodes.aggregate([
{ $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },
])


9. db.zipcodes.aggregate([
{ $group: { _id: { state: "$state", city: "$city" }, pop: {$sum: "$pop" } } },
{$sort: { pop: -1}}
])


10. db.zipcodes.aggregate([
{ $group: { _id: { state: "$state", city: "$city" }, pop: {$sum: "$pop" } } },
{$sort: { pop: -1}},
{$limit: 3}
])

11. db.zipcodes.aggregate([
    {$match: {"state" : "TX"}},
    {$group: {_id: {state: "$state", city: "$city"}, pop: {$sum:"$pop"}}},
    {$sort: {pop: -1}},
    {$limit: 3}
])

Bonus:

12.    db.zipcodes.aggregate( [
      { $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },
      { $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } }
   ] )

13.    db.zipcodes.aggregate( [
      { $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },
      { $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } }
      {$sort: {avgCityPop: -1}},
      {limit:3}
   ] )

