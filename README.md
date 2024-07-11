# Debouncing

typing slow=200 ms
typing fast= 30 ms

# Performance

- iphone pro max = 14 letter \*1000 = 14000
- with debouncing = 3 api calls \*1000=3000

Decouncing with 200ms

- if difference between 2 key strokes is <200ms - DECLINE API CALL
- > 200ms make api calls
