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