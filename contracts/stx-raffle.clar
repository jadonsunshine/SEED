;; STX Daily Raffle Contract
;; A simple raffle where users buy tickets with STX and one winner takes the pot

;; Constants - These values never change
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-insufficient-amount (err u101))
(define-constant err-no-tickets (err u102))
(define-constant err-transfer-failed (err u103))

;; Ticket price: 0.1 STX = 100,000 micro-STX (STX has 6 decimals)
(define-constant ticket-price u100000)

;; Platform fee: 5% = 5
(define-constant platform-fee-percent u5)

;; Data Variables - These change as the raffle runs
(define-data-var current-round uint u1)
(define-data-var current-pot uint u0)
(define-data-var total-tickets-current-round uint u0)

;; Data Maps - Store information about tickets and players
;; Map: ticket number -> buyer's address
(define-map tickets 
    { round: uint, ticket-id: uint } 
    { buyer: principal }
)

;; Map: player address + round -> how many tickets they bought
(define-map player-tickets 
    { player: principal, round: uint } 
    { count: uint }
)

;; Map: round number -> winner address
(define-map round-winners 
    { round: uint } 
    { winner: principal, pot-size: uint }
)

;; Read-Only Functions - These just read data, don't change anything

;; Get current round number
(define-read-only (get-current-round)
    (var-get current-round)
)

;; Get current pot size in micro-STX
(define-read-only (get-current-pot)
    (var-get current-pot)
)

;; Get total tickets sold in current round
(define-read-only (get-total-tickets)
    (var-get total-tickets-current-round)
)

;; Get ticket price
(define-read-only (get-ticket-price)
    ticket-price
)

;; Check how many tickets a player bought in current round
(define-read-only (get-my-tickets)
    (default-to 
        u0 
        (get count (map-get? player-tickets { player: tx-sender, round: (var-get current-round) }))
    )
)

;; Get winner of a specific round
(define-read-only (get-round-winner (round uint))
    (map-get? round-winners { round: round })
)