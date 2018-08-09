class Order {
    private getTotal(): number {
        return 8;
    }

    private prepareSubtotal(): number {
        return 7;
    }

    private getItemCount(): number {
        return 56;
    }

    private getTaxes(): number {
        return 56
    }

    public getSuperTotal(): number {
        return this.getTotal()*this.getItemCount() + this.getTaxes();
    }
}

const order: Order = new Order();
const total = order.getSuperTotal();